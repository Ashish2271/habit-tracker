import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";

interface BlogPost {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  coverImage: string;
  author?: string;
}

interface SingleBlogProps {
  blog: BlogPost;
}

const SingleBlog = ({ blog }: SingleBlogProps) => {
  const { title, slug, date, excerpt, coverImage, author } = blog;

  return (
    <div className="wow fadeInUp shadow-one dark:bg-dark-2 group mb-10 overflow-hidden rounded-lg bg-dark">
      <Link
        href={`/blog/${slug}`}
        className="relative block aspect-[3/2] w-full"
      >
        <Image
          src={coverImage || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover object-center transition duration-300 group-hover:scale-105"
        />
      </Link>
      <div className="p-6">
        <div className="mb-4 flex items-center gap-4">
          <span className="text-body-color dark:text-body-color-dark flex items-center text-xs">
            <span className="mr-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-current"
              >
                <path d="M13.9998 2.6499H12.6998V2.0999C12.6998 1.7999 12.4498 1.5249 12.1248 1.5249C11.7998 1.5249 11.5498 1.7749 11.5498 2.0999V2.6499H4.4248V2.0999C4.4248 1.7999 4.1748 1.5249 3.8498 1.5249C3.5248 1.5249 3.2748 1.7749 3.2748 2.0999V2.6499H1.9998C1.1498 2.6499 0.424805 3.3499 0.424805 4.2249V12.9249C0.424805 13.7749 1.1248 14.4999 1.9998 14.4999H13.9998C14.8498 14.4999 15.5748 13.7999 15.5748 12.9249V4.1999C15.5748 3.3499 14.8498 2.6499 13.9998 2.6499ZM1.5748 7.2999H3.6998V9.7749H1.5748V7.2999ZM4.8248 7.2999H7.4498V9.7749H4.8248V7.2999ZM7.4498 10.8999V13.3499H4.8248V10.8999H7.4498V10.8999ZM8.5748 10.8999H11.1998V13.3499H8.5748V10.8999ZM8.5748 9.7749V7.2999H11.1998V9.7749H8.5748ZM12.2998 7.2999H14.4248V9.7749H12.2998V7.2999ZM1.9998 3.7749H3.2998V4.2999C3.2998 4.5999 3.5498 4.8749 3.8748 4.8749C4.1998 4.8749 4.4498 4.6249 4.4498 4.2999V3.7749H11.5998V4.2999C11.5998 4.5999 11.8498 4.8749 12.1748 4.8749C12.4998 4.8749 12.7498 4.6249 12.7498 4.2999V3.7749H13.9998C14.2498 3.7749 14.4498 3.9749 14.4498 4.2249V6.1749H1.5748V4.2249C1.5748 3.9749 1.7498 3.7749 1.9998 3.7749ZM1.5748 12.8999V10.8749H3.6998V13.3249H1.9998C1.7498 13.3499 1.5748 13.1499 1.5748 12.8999ZM13.9998 13.3499H12.2998V10.8999H14.4248V12.9249C14.4498 13.1499 14.2498 13.3499 13.9998 13.3499Z" />
              </svg>
            </span>
            {format(new Date(date), "dd MMM yyyy")}
          </span>
          {author && (
            <span className="text-body-color dark:text-body-color-dark flex items-center text-xs">
              By {author}
            </span>
          )}
        </div>
        <h3>
          <Link
            href={`/blog/${slug}`}
            className="text-dark hover:text-primary dark:hover:text-primary mb-4 block text-xl font-bold dark:text-white sm:text-2xl"
          >
            {title}
          </Link>
        </h3>
        <p className="text-body-color dark:text-body-color-dark mb-6 text-base">
          {excerpt}
        </p>
        <Link
          href={`/blog/${slug}`}
          className="text-primary inline-flex items-center text-sm font-medium hover:opacity-90"
        >
          Read More
          <span className="ml-2">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current"
            >
              <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" />
            </svg>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default SingleBlog;
