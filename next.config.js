/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: (() => {
    let compilerConfig = {
      //styledComponentsの有効化
      styledComponents: true,
    }

    if (process.env.NODE_ENV === 'production') {
      compilerConfig = {
        ...compilerConfig,
        //本番環境ではReactTestingLibraryで使用するdatatestid属性を削除
        reactRemoveProperties: { properties: ['^datatestid$'] },
      }
    }

    return compilerConfig
  })(),
  async rewrites() {
    return [
      {
        // ex. /api/proxy
        source: `${process.env.NEXT_PUBLIC_API_BASE_PATH}/:match*`,
        // ex. http://localhost:8000
        destination: `${process.env.API_BASE_URL}/:match*`,
      },
    ]
  },
}

module.exports = nextConfig

module.exports = nextConfig