import { parseISO, compareDesc } from 'date-fns';

export const cx = (...classNames: any) => classNames.filter(Boolean).join(" ")

export const sortBlogs = (blogs: any[]) => {
    return blogs
        .slice()
        .sort((a, b) =>
            compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt))
    );
};