import {DataAPIClient} from '@datastax/astra-db-ts'
import {RecursiveCharacterTextSplitter} from 'langchain/text_splitter'
import 'dotenv/config'
import khalidData from '../constant/khalid-data.json' with {type:'json'}
import OpenAI from 'openai'

const openai = new OpenAI({
    apiKey:process.env.OPENAI_KEY
})

const client = new DataAPIClient(process.env.ASTRA_DB_APPLICATION_TOKEN)
const db = client.db(process.env.ASTRA_DB_API_ENDPOINT)

const splitter =new  RecursiveCharacterTextSplitter({
    chunkSize:1000,
    chunkOverlap:200
})

const createCollection = async ()=>{
    try {
        await db.createCollection('portfolio',{
            vector:{
                dimension:1536
            }
        })
        
    } catch (error) {
        console.log('Collection is already exists')
    }
}

const loadData = async ()=>{
    const collection = await db.collection('portfolio')
    for await (const { id, info, description} of khalidData ){
        const chunks = await splitter.splitText(description)
        let i=0
        for await (const chunk of chunks){
            const {data} = await openai.embeddings.create({
                input:chunk,
                model:'text-embedding-3-small'
            })
            const res= await collection.insertOne({
                document_id:id,
                $vector:data[0]?.embedding,
                info,
                description:chunk
            })
            i++;
        }
    }

    console.log('data loaded');
    
}

createCollection().then(()=>loadData())