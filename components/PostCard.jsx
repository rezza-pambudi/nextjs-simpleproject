import posts from "@/data/posts.json";
import Link from "next/link";

export default function PostCard () {
    return (
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.id}
            className="flex max-w-xl flex-col items-start justify-between"
          >
            <div className="flex items-center gap-x-4 text-xs">
              <time dateTime={post.datetime} className="text-gray-500">
                {post.date}
              </time>
              <Link
                href={post.category.href}
                className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
              >
                {post.category.title}
              </Link>
            </div>
            <div className="group relative grow">
              <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                <Link href={post.href}>
                  <span className="absolute inset-0" />
                  {post.title}
                </Link>
              </h3>
              <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">
                {post.description}
              </p>
            </div>
            <div className="relative mt-8 flex items-center gap-x-4 justify-self-end">
              <img
                alt=""
                src={post.author.imageUrl}
                className="size-10 rounded-full bg-gray-50"
              />
              <div className="text-sm/6">
                <p className="font-semibold text-gray-900">
                  <Link href={post.author.href}>
                    <span className="absolute inset-0" />
                    {post.author.name}
                  </Link>
                </p>
                <p className="text-gray-600">{post.author.role}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    )
}