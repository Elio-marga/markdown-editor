import { useState } from 'react'
import Markdown from 'react-markdown'
function App() {
  const [text, setText] = useState("")  
  const [markdown, setMarkdown] = useState("Markdown text will be rendered here.")
  const handleTextChange = (e) => {
    setText(e.target.value)
    setMarkdown(e.target.value)
    if (e.target.value == 0) {
      setMarkdown("Markdown text will be rendered here.")
    }
  }
  console.log(markdown)

  return (
    <>  
      <div className="flex text-center justify-center">
        <div >
          <h2 className="mt-5 ml-5 text-3xl font-bold text-orange-400">Markdown Input</h2>
          <textarea value={text} placeholder="start type in markdown" className="focus:outline-orange-400 m-5 p-2 resize-none rounded-md cursor-text border border-slate-400 text-xl" cols={50} rows={20} onChange={handleTextChange}></textarea>
        </div>
        <span className='mt-5 border-l-2 border-slate-400 text-xl'>
        </span>
        <div className="scroll-auto">
          <h2 className="mt-5 ml-5 text-3xl font-bold text-orange-400">Markdown Output</h2>
          <div className='m-5 p-2 resize-none rounded-md border border-slate-400 text-xl'>
            <div class="prose lg:prose-xl"> 
              <Markdown>{ markdown }</Markdown>
            </div>
          </div>
        </div>
      </div>
      <div className='text-center'>
        &copy;2025 Elio All Rights Reserved.
      </div>
      </>
    )
  }

  export default App
