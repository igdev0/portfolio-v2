'use client'
import React from 'react'
import type { Navbar as NavbarBlock } from '@/payload-types'
import type { DefaultNodeTypes, SerializedBlockNode } from '@payloadcms/richtext-lexical'
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'

import { type JSXConvertersFunction, RichText } from '@payloadcms/richtext-lexical/react'
import Navbar from '@/app/(frontend)/components/navbar'

// Extend the default node types with your custom blocks for full type safety
export type NodeTypes = DefaultNodeTypes | SerializedBlockNode<NavbarBlock>;

export const jsxConverters: JSXConvertersFunction<NodeTypes> = ({ defaultConverters }) => {
  return {
    ...defaultConverters,
    blocks: {
      // Each key should match your block's slug
      navbar: ({ node }) => <Navbar {...node.fields.navbar} />,
    },
    inlineBlocks: {
      // Each key should match your inline block's slug
      myInlineBlock: ({ node }) => <span>{node.fields.text}</span>,
    },
  }
}

export const Converted: React.FC<{
  lexicalData: SerializedEditorState
}> = ({ lexicalData }) => {
  return <RichText converters={jsxConverters} data={lexicalData} />
}
