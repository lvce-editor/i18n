const emptyObject = {}

const RE_PLACEHOLDER = /\{(PH\d+)\}/g

export const i18nString = (
  key: string,
  placeholders: any = emptyObject,
): string => {
  if (placeholders === emptyObject) {
    return key
  }
  let result = key
  for (const [placeholder, replacement] of Object.entries(placeholders)) {
    result = result.split(`{${placeholder}}`).join(String(replacement))
  }
  return result
}
