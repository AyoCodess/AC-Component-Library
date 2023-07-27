"use client"

import React, { useState } from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"

import SyntaxHighlighter from "react-syntax-highlighter"
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs"

export function ComponentCode({ code }: { code: string }) {
  const [copiedCoinValue, setCopied] = useState({ copied: false })
  return (
    <div className=" mb-5 flex flex-col gap-2 rounded-sm bg-black">
      <div className="mt-2 flex flex-row items-center gap-2 self-end  ">
        {copiedCoinValue.copied === true && (
          <span className=" text-red-500">copied</span>
        )}
        <CopyToClipboard
          text={code}
          onCopy={() => {
            setCopied({ copied: true })
          }}
        >
          <span className="  mr-2 cursor-pointer text-center text-lg text-white ">
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
