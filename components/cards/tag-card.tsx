import { getDeviconClassName } from '@/lib/utils'
import { RxCross2 } from "react-icons/rx";
import React from 'react'
import { Badge } from '../ui/badge';
import { ObjectId } from 'mongoose';


interface Props {
  id: string | ObjectId
  name: string
  onRemove?: () => void
  remove?: boolean

}

const TagCard = ({ name, id, onRemove, remove }: Props) => {
  const iconClass = getDeviconClassName(name);
  return (
    <div className="flex  items-center  justify-between rounded-xl gap-2">
      <Badge className="space-x-1 rounded-xl border-none  py-2 uppercase">
        <div className="flex-center space-x-2">
          <i className={`${iconClass} text-sm`}></i>
          <span>{name}</span>
        </div>
        {
          remove && <RxCross2 size={20} onClick={onRemove} />
        }
      </Badge>
    </div>
  )
}

export default TagCard
