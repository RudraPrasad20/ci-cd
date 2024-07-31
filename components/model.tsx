import React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from './ui/dialog'

interface ModelProps {
    title: string,
    description: string
}

const Model = ({title, description}: ModelProps) => {
  return (
    <div className=' bg-slate-500'>
          <Dialog>
      <DialogTrigger>Open</DialogTrigger>
      <DialogContent>
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
      </DialogContent>
      </Dialog>
    </div>
  )
}

export default Model