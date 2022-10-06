/**
 * Responsiveプロパティ
 * CSSプロパティの値をプレークポイントごとに設定できる
 * TはCSSプロパティの値の型
 */
import {NextPage} from 'next';

type ResponsiveProp<T> = {
  base?: T //デフォルト
  sm?: T // 640px以上
  md?: T // 768px以上
  lg?: T // 1024px以上
  xl?: T // 1280px以上
}

/**
 * Responsive型はResponsiveプロパティもしくはCSSプロパティの値
 */
type Responsive<T> = T | ResponsiveProp<T>

// Themeの型
type AppTheme = typeof theme
// Themeのキーの型
type SpaceThemeKeys = keyof typeof theme.space
// Themeのキーの型(SpaceThemeKeys) もしくは任意の文字列('10px'など)
type Space = SpaceThemeKeys | (string & {}) // & {}を書くとエディターの補完が効くようになる

/**
 * Responsive型をCSSプロパティとその値に変換
 * @param propKey CSSプロパティ
 * @param prop Responsive型
 * @return CSSプロパティとその値(ex. background-color: white;)
 */
function toPropValue<T>(propKey: string, prop?: Responsive<T>, theme?: AppTheme): string {
  /**
   *
   */
}

interface ContainerProps {
  flexDirection?: Responsive<string>
  marginBottom?: Responsive<Space>
}

const Container = styled.section<ContainerProps>`
  padding: 4em;
  display: flex;
  ${(props) => toPropValue('flex-direction', props.flexDirection, props.theme)}
  ${(props) => toPropValue('margin-bottom', props.marginBottom, props.theme)}
`

const Page: NextPage = () => {
  return (
    <>
    <Container flexDirection="column" marginBottom="8px">
      {
        /*
        - 常に縦並びになります
        - 下に8px(テーマ設定した二つ目の要素）のマージン
         */}
      <div>First item</div>
      <div>Second item</div>
      }
    </Container>
    </>
  )
}

const Container = styled.section<ContainerProps>`
  padding: 4em;
  display: flex;
  ${(props) => toPropValue('flex-direction', props.flexDirection)}
`

const Page: NextPage = () => {
  return (
    <>
      <Container flexDirection="column">
        {/* 常に縦並びになります */}
        <div>First item</div>
        <div>Second item</div>
      </Container>
      <Container flexDirection={{ base: 'column', sm: 'row' }}>
        {/* 640px以上だと横並び、それ以外だと縦並びになります */}
        <div>First item</div>
        <div>Second item</div>
      </Container>
    </>
  )
}
export default Page