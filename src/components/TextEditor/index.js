import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import {
  Container,
  Heading,
  Image,
  ContainerBlack,
  Button,
  TextArea,
  UnOrderList,
  ItalicButton,
  UnderlineButton,
} from './styledComponents'

class TextEditor extends Component {
  state = {isItalic: false, isBold: false, isUnderLine: false}

  boldFunction = () => {
    this.setState(prevState => ({
      isBold: !prevState.isBold,
    }))
  }

  italicFunction = () => {
    this.setState(prevState => ({
      isItalic: !prevState.isItalic,
    }))
  }

  underLineFunction = () => {
    this.setState(prevState => ({
      isUnderLine: !prevState.isUnderLine,
    }))
  }

  render() {
    const {isItalic, isBold, isUnderLine} = this.state
    const boldColor = isBold ? '#faff00' : '#f1f5f9'
    const italicColor = isItalic ? '#faff00' : '#f1f5f9'
    const underLineColor = isUnderLine ? '#faff00' : '#f1f5f9'

    const fontWeight = isBold ? 'bold' : 'normal'

    const fontStyle = isItalic ? 'italic' : 'normal'

    const textDecoration = isUnderLine ? 'underline' : 'normal'
    console.log(fontWeight, fontStyle, textDecoration)
    return (
      <Container>
        <Heading>Text Editor</Heading>
        <Image
          src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
          alt="text editor"
        />
        <ContainerBlack>
          <UnOrderList>
            <li>
              <Button
                data-testid="bold"
                onClick={this.boldFunction}
                color={boldColor}
              >
                <VscBold size={25} />
              </Button>
            </li>
            <li>
              <ItalicButton
                data-testid="italic"
                onClick={this.italicFunction}
                color={italicColor}
              >
                <GoItalic size={25} />
              </ItalicButton>
            </li>
            <li>
              <UnderlineButton
                data-testid="underline"
                onClick={this.underLineFunction}
                color={underLineColor}
              >
                <AiOutlineUnderline size={25} />
              </UnderlineButton>
            </li>
          </UnOrderList>
          <TextArea
            fontWeight={fontWeight}
            fontStyle={fontStyle}
            textDecoration={textDecoration}
          />
        </ContainerBlack>
      </Container>
    )
  }
}
export default TextEditor
