'use client';

import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const Code = ({ title, code, style, lang, startingNum = 1 }) => {
  return (
    <div className={style}>
      <div className='min-w-0 max-w-6xl bg-[#3a404d] rounded-md overflow-hidden'>
        <div className='p-3 text-white text-xs items-center'>
          <p className='text-sm'>
            {title}
          </p>
        </div>
        <SyntaxHighlighter language={lang} style={atomOneDark}
          customStyle={{
            
          }}
          showLineNumbers={true}
          startingLineNumber={startingNum}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}

export default Code