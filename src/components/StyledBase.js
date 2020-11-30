
import styled, {createGlobalStyle, keyframes, css} from 'styled-components'

const Title = styled.h1`
  font-size: 18px;
  text-align: center;
  color: red;
`
const Wrapper = styled.section`
  font-size: 20px;
  color: blue;
`
const Button = styled.button`
  background: ${props => props.primary ? 'palevioletred' : 'white'};
  color: ${props => props.primary ? 'white' : 'palevioletred'};
  font-size: 20px;
  margin: 10px;
  padding: 25px 10px;
  border: 2px solid palevioletred;
  border-radius: 6px;
  text-decoration: none;
`

const OrangeEmptyBtn = styled(Button)`
  color: orange;
  border-color: orange;
`

const ReverseButton = (props) => <Button {...props} children={props.children.split('').reverse()} />

const Link = ({ className, children }) => (
  <a className={className} >{children}</a>
)

const StyledLink = styled(Link)`
  font-size: 40px;
  color: red;
  text-decoration: none;
`

const Ting = styled.div.attrs(() => ({ tabIndex: 0 }))`
  color: blue;
  &:hover{
    color: red;
  }; 
  & ~ & {
    background: tomato;
  };  // 给兄弟Ting 设置样式，不需要相邻
  & + & {
    background: red; /* 兄弟Ting 设置样式 */
  };
  &.something{
    background: orange; /* 给类名是something的Ting设置样式*/
  };
  .something-else & {
    background: yellow; /* 被类名是something-else 包裹的Ting */
  }
  .kid{
    background: red; 
    color: white;  /* 没有&， 表示Ting的子元素*/
  };

`

const Text1 = styled.div`
  && {
    color: red;
  }
`
const GlobalStyle = createGlobalStyle`
  div${Text1} {
    color: blue;
  }
`

const rotate = keyframes`
  from {
    transform: rotate(0deg)
  }
  to {
    transform: rotate(360deg)
  }
`
const styles = css`
   animation: ${rotate} 2s linear infinite;
`
const Rotate = styled.div`
  ${styles}
  padding: 2rem 1rem;
  font-size: 1.2rem;
  display: inline-block;
`



function StyleBase() {
    return (
        <Wrapper>
          <Title>
            Hello world!!!!
       </Title>
          <Button>Normal</Button>
          <Button primary>primary</Button>
          <OrangeEmptyBtn>Orange Button</OrangeEmptyBtn>
          <Button as='a' href="/">Link With Button styles</Button>
          <OrangeEmptyBtn as="div">Link with OrangeEmptyBtn styles</OrangeEmptyBtn>
          <OrangeEmptyBtn as={ReverseButton}>Custom Button with OrangeEmptyBtn Styles</OrangeEmptyBtn>
          <Link>link</Link>
          <br />
          <StyledLink>styled Link</StyledLink>
          <Ting>hello World</Ting>
          <Ting>hello world</Ting>
          <Ting className="something"> hello world</Ting>
          <div className="something-else">
            <Ting>
              hellog
            </Ting>
          </div>
          <Ting>
            <span className="kid">kid</span>
          </Ting>
          <GlobalStyle/>
          <Text1>测试样式优先级</Text1>
          <Rotate>👋👋</Rotate>
        </Wrapper>
    );
  }
  
  export default StyleBase;
  