import Link from 'next/link';
import React from 'react';

interface PostOneProps {
  Slug?: string;
  Img?: string;
  Title?: string;
  Category?: string;
  Author?: string;
}

const PostOne: React.FC<PostOneProps> = ({
  Slug,
  Img,
  Title,
  Category,
  Author,
}) => {
  return (
    <div className="single-blog-area-one column-reverse">
      <p>
        {Category || "Business Solution"} / <span>{Author || "by David Dolean"}</span>
      </p>

      <Link href={`/blog/${Slug || "details"}`}>
        <h4 className="title">
          {Title || "Solution Of settle tips of the new ages exist"}
        </h4>
      </Link>

      <div className="bottom-details">
        <Link href={`/blog/${Slug || "details"}`} className="thumbnail">
          <img
            src={Img || "/assets/images/blog/03.webp"}
            alt={Title || "Blog thumbnail"}
          />
        </Link>
      </div>
    </div>
  );
};

export default PostOne;
