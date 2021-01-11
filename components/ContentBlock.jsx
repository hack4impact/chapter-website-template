import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

function ContentBlock({ content, className, id }) {
  return (
    <div
      className={className}
      id={id}
      dangerouslySetInnerHTML={{ __html: documentToHtmlString(content) }}></div>
  );
}

export default ContentBlock;
