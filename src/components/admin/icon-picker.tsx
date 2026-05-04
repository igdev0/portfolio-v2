'use client'
import { useField } from '@payloadcms/ui'
import { DynamicIcon, dynamicIconImports } from 'lucide-react/dynamic'
import {
  Combobox,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxPopup,
} from '@/components/ui/combobox'
import { useMemo, useState } from 'react'

export default function IconPicker({ path }: { path: string }) {
  const { value, setValue } = useField<{label: string, value: string}>({ path })
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
  }, [query])


  return (
    <Combobox
      items={items}
      onValueChange={(value) => setValue(value)}
      value={typeof value === 'string' ? JSON.parse(value).value : value}
    >
      <ComboboxInput
        placeholder="Search icon..."
        style={{ border: 'none' }}
        onChange={(val) => setQuery(val.target.value)}
      />
      <ComboboxPopup>
        <ComboboxEmpty>No results found.</ComboboxEmpty>
        <ComboboxList>
          {(item) => (
            <ComboboxItem key={item.value} value={item}>
              <DynamicIcon name={item.value} className="mr-2" />
              {item.label}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxPopup>
    </Combobox>
  )
}
