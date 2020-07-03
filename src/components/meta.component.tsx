import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

export type MetaProps = {
    title: string;
};

export function Meta(props: React.PropsWithChildren<MetaProps>) {
    const { title } = props;
    const { site } = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                    author
                }
            }
        }
    `);

    return (
        <Helmet
            htmlAttributes={{ 
                lang: 'en',
            }}
            title={title}
            titleTemplate={`%s - ${site.siteMetadata.title}`}
            meta={[
                {
                    name: 'description',
                    content: site.siteMetadata.description
                }
            ]}
        />
    );
}