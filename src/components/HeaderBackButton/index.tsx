import { BackButton } from '@components/BackButton';
import { Container, FormLine, TitleFormText } from './styles';
export function HeaderBackButton(){
return(
        <Container>
            <FormLine>
                <BackButton />
                <TitleFormText>
                    Nova refeição
                </TitleFormText>
            </FormLine>
        </Container>
    );
} 