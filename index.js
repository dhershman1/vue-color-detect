import { ref, onMounted, onUnmounted } from 'vue'

export default function useDetectColorScheme () {
  const colorSchemes = {
    DARK: '(prefers-color-scheme: dark)',
    LIGHT: '(prefers-color-scheme: light)'
  }
  const colorKeys = Object.keys(colorSchemes)
  const scheme = ref('LIGHT')

  // If we don't have a matchMedia key just return the scheme as is
  if (!window.matchMedia) {
    return scheme
  }

  // A simple listener for our color scheme changes
  function listener (e) {
    if (!e || !e.matches) {
      return scheme
    }

    for (const sn of colorKeys) {
      if (e.media === colorSchemes[sn]) {
        scheme.value = sn
        break
      }
    }
  }

  // Add our listener for all themes
  onMounted(() => {
    colorKeys.forEach(sn => {
      const mq = window.matchMedia(colorSchemes[sn])
      mq.addEventListener('change', listener)

      listener(mq)
    })
  })

  // Remove listeners, no memory leaks
  onUnmounted(() => {
    colorKeys.forEach(sn => {
      const mq = window.matchMedia(colorSchemes[sn])
      mq.removeEventListener('change', listener)
    })
  })

  return scheme
}
