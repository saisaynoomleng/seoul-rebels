import {generateSKU} from '@seoul-rebels/utils'
import {StringInputProps, useFormValue, set} from 'sanity'
import {useCallback} from 'react'

export const SkuGenerator = (props: StringInputProps): React.JSX.Element => {
  const {onChange} = props
  const name = useFormValue(['name']) as string

  const handleGenerate = useCallback(() => {
    const sku = generateSKU(name)
    onChange(set(sku))
  }, [name, onChange])

  return (
    <div style={{display: 'flex', gap: '0 10px'}}>
      <div style={{width: '100%'}}>{props.renderDefault(props)}</div>

      <button
        onClick={handleGenerate}
        style={{
          display: 'inline-block',
          backgroundColor: 'transparent',
          border: '1px solid white',
          borderRadius: '2px',
        }}
      >
        Generate
      </button>
    </div>
  )
}
