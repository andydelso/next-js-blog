import markdownStyles from '../About/markdown-styles.module.css'

export default function PortfolioBody({ content }) {
  return (
    <div
      className={markdownStyles['markdown']}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}
