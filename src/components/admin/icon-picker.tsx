'use client'
import { useEditDepth, useField } from '@payloadcms/ui'
import { DynamicIcon, dynamicIconImports } from 'lucide-react/dynamic'
import {
  Combobox,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxPopup,
} from '@/components/ui/combobox'
import { useEffect, useMemo, useState } from 'react'

export default function IconPicker({ path }: { path: string }) {
  const { value, setValue } = useField<string>({ path })
  const [query, setQuery] = useState('')

  const items = useMemo(() => {
    return Object.keys(dynamicIconImports)
      .filter((item) =>
        item.toLowerCase().includes(query.toLowerCase())
      )
      .slice(0, 100)
      .map((item) => ({
        label: item,
        value: item,
      }))
  }, [query]);

  useEffect(() => {
    value && setQuery(value)
  }, [value])

  return (
    <Combobox
      items={items}
      onValueChange={(value) => {
        setValue(value);
      }}
      value={value}
    >
      <ComboboxInput
        placeholder="Search icon..."
        onChange={(e) => setQuery(e.target.value)}
        style={{ border: 'none' }}
      />
      <ComboboxPopup>
        <ComboboxEmpty>No results found.</ComboboxEmpty>
        <ComboboxList>
          {(item) => (
            <ComboboxItem key={item.value} value={item.value}>
              <DynamicIcon name={item.value} className="mr-2" />
              {item.label}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxPopup>
    </Combobox>
  )
}
