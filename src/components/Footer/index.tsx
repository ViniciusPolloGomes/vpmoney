import { Container, Content, LeftFooter, RightFooter } from "./style";



export function Footer() {
    return (
        <Container>
            <Content>
                <LeftFooter>
                    <div>
                        <img src="" alt=""/>
                        <strong></strong>
                    </div>
                    <div>
                       <img src="" alt=""/><label></label>
                       <img src="" alt=""/><label></label>
                       <img src="" alt=""/><label></label>
                    </div>
                    <div>
                        <a href=""></a>
                        <a href=""></a>
                        <a href=""></a>
                        <a href=""></a>
                    </div>
                </LeftFooter>
                <RightFooter>               
                    <h1>Contact</h1>
                    <input type="email" name="email"  />
                    <textarea name="textemail" cols={5} rows={5}></textarea>
                    <button type="submit">Enviar</button>
                </RightFooter>
            </Content>
        </Container>
    );
}