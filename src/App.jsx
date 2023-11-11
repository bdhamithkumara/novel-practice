import { useState } from 'react'
import DefaultExtensions from './support/DefaultExtensions';
import { Editor } from "novel";
import { Extension } from '@tiptap/core'
import Placeholder from '@tiptap/extension-placeholder';


const CustomExtension = Extension.create({
  name: 'custom-extension',
  addExtensions() {
    return [Placeholder.configure({
      placeholder: ({ node }) => {
        if (node.type.name === 'heading') {
          return `Heading ${node.attrs.level}`;
        }
        return "Press '/' for commands, or '++' for AI autocomplete";
      },
      includeChildren: true,
    })];
  },
});

function App() {


  return (
    <div className='w-[100vh]'>
      <Editor 
      className="bg-gray-600
         border-stone-200  
         rounded-lg border shadow-lg w-[800px] h-auto relative "
         extensions={[CustomExtension]} 
      />
    </div>
  )
}

export default App
