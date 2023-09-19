import { Container, TextButton } from "./styles";

type Props = {
    title: string;
}

export function ButtonLarger({title} :Props){
    return(
        <Container>
            <TextButton>
                {
                    title
                }
            </TextButton>
        </Container>
    );
}