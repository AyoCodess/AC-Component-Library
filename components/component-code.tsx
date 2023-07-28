"use client"

import React, { useEffect, useState } from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"

import SyntaxHighlighter from "react-syntax-highlighter"
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs"

export function ComponentCode({ code }: { code: string }) {
  const [copiedValue, setCopied] = useState({ copied: false })
  useEffect(() => {
    const timer = setTimeout(() => setCopied({ copied: false }), 2000)

    return () => {
      clearTimeout(timer)
    }
  }, [copiedValue])

  return (
    <div className=" mb-5 flex  flex-col gap-2 rounded-sm ">
      <div className="mt-2 flex  items-center justify-center gap-2 self-end rounded-md bg-black px-4 py-2 text-center ">
        {copiedValue.copied === true && (
          <span className=" text-red-500">copied</span>
        )}
        <CopyToClipboard
          text={code}
          onCopy={() => {
            setCopied({ copied: true })
          }}
        >
          <span className="   h-full cursor-pointer text-center text-lg text-white ">
            Copy code
          </span>
        </CopyToClipboard>
      </div>

      <div className="h-[20rem] overflow-x-hidden overflow-y-scroll">
        <SyntaxHighlighter language="typescript" style={docco}>
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}
