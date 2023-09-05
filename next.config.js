/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript:{
        ignoreBuildErrors:true
    },
    experimental:{
        serverActions:true
    },
    images:{
        remotePatterns:[
            {   protocol:"https",
                hostname:"avatars.githubusercontent.com"
            }
        ]
    }
}

module.exports = nextConfig
