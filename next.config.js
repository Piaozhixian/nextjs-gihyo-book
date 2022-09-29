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
 };

module.exports = nextConfig