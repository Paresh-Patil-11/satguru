import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SEO = ({ title, description, keywords, ogImage }) => {
  const location = useLocation()
  const baseUrl = 'https://sadgurustaffing.com'
  const fullUrl = `${baseUrl}${location.pathname}`

  useEffect(() => {
    document.title = title

    const metaTags = [
      { name: 'description', content: description },
      { name: 'keywords', content: keywords },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: fullUrl },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: ogImage || `${baseUrl}/og-image.jpg` },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: ogImage || `${baseUrl}/og-image.jpg` },
    ]

    metaTags.forEach(({ name, property, content }) => {
      let element = document.querySelector(
        name ? `meta[name="${name}"]` : `meta[property="${property}"]`
      )

      if (!element) {
        element = document.createElement('meta')
        if (name) element.setAttribute('name', name)
        if (property) element.setAttribute('property', property)
        document.head.appendChild(element)
      }

      element.setAttribute('content', content)
    })

    let canonicalLink = document.querySelector('link[rel="canonical"]')
    if (!canonicalLink) {
      canonicalLink = document.createElement('link')
      canonicalLink.setAttribute('rel', 'canonical')
      document.head.appendChild(canonicalLink)
    }
    canonicalLink.setAttribute('href', fullUrl)
  }, [title, description, keywords, ogImage, fullUrl])

  return null
}

export default SEO