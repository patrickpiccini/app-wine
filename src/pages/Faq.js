import { View, Text, StyleSheet, ImageBackground, Image, ScrollView} from 'react-native'
import React, { useLayoutEffect } from 'react'
import { Button } from 'react-native-paper';

const backgroundimg = "../images/fundo.png";
const logo = "../images/logo.png";

export default function Faq(props) {

    const navigation = props.navigati

  
    return (
    <View style={styles.container}>
      {/* ------IMAGEM DE BACKGROUND------- */}   
    <ImageBackground source={require(backgroundimg)} resizeMode="cover" style={styles.image}>
    <ScrollView>


    <View style={styles.columnBox}>

        {/* ------LOGO PICCINI & PITT------- */}  
        <Image source={require(logo)} style={styles.logo}/>

        <View style={{alignItems:'center', justifyContent:'center', marginTop:15}}>
            
            {/* ------PERGUNTA 1------- */}
            <Text style={{fontSize:20,color:'white',fontWeight:'bold', marginTop:10, textAlign:'justify'}}>
          1. Onde surgiu a ideia do App Piccini & Pitt Wine?
            </Text>
            <Text style={{fontSize:18,color:'white', textAlign:'justify'}}>
            - Piccini & Pitt Wine é um app idealizado para contemplar o trabalho de Tópicos Especiais em Computação com o professor Marcos Roberto dos Santos da IMED.
            </Text>

            {/* ------PERGUNTA 2------- */}
            <Text style={{fontSize:20,color:'white',fontWeight:'bold', marginTop:10, textAlign:'justify'}}>
            2. Tem algum custo para baixar e instalar o App?
            </Text>
            <Text style={{fontSize:18,color:'white', textAlign:'justify'}}>
            - Não!  O App pode ser baixado e compartilhado sem custo algum!
            </Text>

            {/* ------PERGUNTA 3------- */}
            <Text style={{fontSize:20,color:'white',fontWeight:'bold', marginTop:10, textAlign:'justify'}}>
            3. Preciso estar cadastrado para uso?
            </Text>
            <Text style={{fontSize:18,color:'white', textAlign:'justify'}}>
            - Sim!  O cadastro é uma exigência para ter acesso ao aplicativo!
            </Text>

            {/* ------PERGUNTA 4------- */}
            <Text style={{fontSize:20,color:'white',fontWeight:'bold', marginTop:10, textAlign:'justify'}}>
            4. Quais os dados necessários para o cadastro?
            </Text>
            <Text style={{fontSize:18,color:'white', textAlign:'justify'}}>
            - Nome Completo, idade, telefone, cidade, e-mail e senha.
            </Text>

            {/* ------PERGUNTA 5------- */}
            <Text style={{fontSize:20,color:'white',fontWeight:'bold', marginTop:10, textAlign:'justify'}}>
            5. Os dados cadastrados estão seguros?
            </Text>
            <Text style={{fontSize:18,color:'white', textAlign:'justify'}}>
            - Sim!  Os dados cadastrados estão seguros e protegidos pela Lei Geral de Proteção de Dados Pessoais (LGPD).
            </Text>

            {/* ------PERGUNTA 6------- */}
            <Text style={{fontSize:20,color:'white',fontWeight:'bold', marginTop:10, textAlign:'justify'}}>
            6. Posso excluir meu cadastro de usuário?
            </Text>
            <Text style={{fontSize:18,color:'white', textAlign:'justify'}}>
            - Sim!  Você pode solicitar a exclusão do seu cadastro de usuário através dos contatos: patrickbpiccini@icloud.com e/ou vitalinopitt@gmail.com 
            </Text>

            {/* ------PERGUNTA 7------- */}
            <Text style={{fontSize:20,color:'white',fontWeight:'bold', marginTop:10, textAlign:'justify'}}>
            7. Quais os campos e dados que posso cadastrar no App?
            </Text>
            <Text style={{fontSize:18,color:'white', textAlign:'justify'}}>
            - Você poderá cadastrar no campo Adega:
                * Nome do Vinho;
                * Nome da Uva;
                * Ano de fabricação;
                * Vínicola;
                * Endereço da Vinícola / ou Adega.
            </Text>

            {/* ------PERGUNTA 8------- */}
            <Text style={{fontSize:20,color:'white',fontWeight:'bold', marginTop:10, textAlign:'justify'}}>
            8. Todos os campos são necessários no cadastro da adega?
            </Text>
            <Text style={{fontSize:18,color:'white', textAlign:'justify'}}>
            - Sim!  É necessário preencher todos os campos para finalizar o cadastro
            </Text>

            {/* ------PERGUNTA 19------- */}
            <Text style={{fontSize:20,color:'white',fontWeight:'bold', marginTop:10, textAlign:'justify'}}>
            9. O que encontro no campo Harmonização?
            </Text>
            <Text style={{fontSize:18,color:'white', textAlign:'justify'}}>
            - Lá você vai encontrar uma série de uvas e dicas de sua melhor harmonização com alimentos.
            </Text>

            {/* ------PERGUNTA 10------- */}
            <Text style={{fontSize:20,color:'white',fontWeight:'bold', marginTop:10, textAlign:'justify'}}>
            10. Posso acrescentar sugestão de Harmonização?
            </Text>
            <Text style={{fontSize:18,color:'white', textAlign:'justify'}}>
            - Não!  Para isso, envie sua sugestão para avaliação e caso a equipe responsável considerar necessário adicionará.
            </Text>

            {/* ------PERGUNTA 11------- */}
            <Text style={{fontSize:20,color:'white',fontWeight:'bold', marginTop:10, textAlign:'justify'}}>
            11. Posso excluir itens de Harmonização?
            </Text>
            <Text style={{fontSize:18,color:'white', textAlign:'justify'}}>
            - Não!  Para isso, envie sua sugestão/reclamação e avaliaremos a necessidade da remoção.
            </Text>

            {/* ------PERGUNTA 12------- */}
            <Text style={{fontSize:20,color:'white',fontWeight:'bold', marginTop:10, textAlign:'justify'}}>
            12. No item Mapa, posso adicionar ou alterar uma localização?
            </Text>
            <Text style={{fontSize:18,color:'white', textAlign:'justify'}}>
            - Sim!  A adição e/ou alteração da localização deverá ser efetuada pelo campo adega no ícone (+) para cadastro de um novo vinho e no íconel ( ) para  edição/alteração.
            </Text>

            {/* ------PERGUNTA 13------- */}
            <Text style={{fontSize:20,color:'white',fontWeight:'bold', marginTop:10, textAlign:'justify'}}>
            13. Porquê da tela sobre?
            </Text>
            <Text style={{fontSize:18,color:'white', textAlign:'justify'}}>
            - Dados para identificar os envolvidos no desenvolvimento do app:
              Desenvolvedores: Patrick Berlatto Piccini e Vitalino Pitt;
              Professor: Marcos Roberto dos Santos;
              Disciplina: Tópicos Especiais em Computação;
              Faculdade: IMED
            </Text>

            {/* ------PERGUNTA 14------- */}
            <Text style={{fontSize:20,color:'white',fontWeight:'bold', marginTop:10, textAlign:'justify'}}>
            14. No campo sair, fecha o aplicativo?
            </Text>
            <Text style={{fontSize:18,color:'white', textAlign:'justify'}}>
            - Não!  Somente faz o logoff e direciona para a tela de login novamente.
            </Text>

            {/* ------PERGUNTA 15------- */}
            <Text style={{fontSize:20,color:'white',fontWeight:'bold', marginTop:10, textAlign:'justify'}}>
            15. Preciso fazer o cadastra toda a vez que for acessar?
            </Text>
            <Text style={{fontSize:18,color:'white', textAlign:'justify'}}>
            - Não! O cadastro é feito uma vez só!
            </Text>

            {/* ------PERGUNTA 16------- */}
            <Text style={{fontSize:20,color:'white',fontWeight:'bold', marginTop:10, textAlign:'justify'}}>
            16. Para fazer login, preciso digitar meus dados (Email e Password) toda a vez?
            </Text>
            <Text style={{fontSize:18,color:'white', textAlign:'justify'}}>
            - Não!  Para isso marque a função “Lembre-me”
            </Text>

            {/* ------PERGUNTA 17------- */}
            <Text style={{fontSize:20,color:'white',fontWeight:'bold', marginTop:10, textAlign:'justify'}}>
            17. Qual o telefone para entrar em contato com os responsáveis pelo aplicativo?
            </Text>
            <Text style={{fontSize:18,color:'white', textAlign:'justify'}}>
            - O contato é feito único e exclusivamente para o email: patrickbpiccini@icloud.com e/ou vitalinopitt@gmail.com 
            </Text>

            {/* ------PERGUNTA 18------- */}
            <Text style={{fontSize:20,color:'white',fontWeight:'bold', marginTop:10, textAlign:'justify'}}>
            18. Caso não queira mais utilizar o app, o que devo fazer?
            </Text>
            <Text style={{fontSize:18,color:'white', textAlign:'justify'}}>
            - No próprio telefone, arraste o app para o campo desinstalar.
            </Text>

            {/* ------PERGUNTA 19------- */}
            <Text style={{fontSize:20,color:'white',fontWeight:'bold', marginTop:10, textAlign:'justify'}}>
            19. Se eu trocar de telefone, vou perder meus cadastros?
            </Text>
            <Text style={{fontSize:18,color:'white', textAlign:'justify'}}>
            - Não!  A fazer login em qualquer celular/tablet você terá acesso aos seus cadastros.
            </Text>

            {/* ------PERGUNTA 20------- */}
            <Text style={{fontSize:20,color:'white',fontWeight:'bold', marginTop:10, textAlign:'justify'}}>
            20. Outras pessoas terão acesso aos meus cadastros de vinhos?
            </Text>
            <Text style={{fontSize:18,color:'white', textAlign:'justify'}}>
            - Não!  Seus cadastros de vinhos somente serão acessados e visualizados através do seu login com seu email e senha.
            </Text>

            <Text style={{fontSize:20,color:'white',fontWeight:'bold', marginTop:20, textAlign:'center'}}>
            SE BEBER, NÃO DIRIJA. APRECIE COM MODERAÇÃO. A VENDA DE BEBIDAS ALCOÓLICAS É PROIBIDA PARA MENORES DE 18 ANOS.
            </Text>



        </View>

    </View>
    </ScrollView>
    
    </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
      },
      image: {
        flex: 1,
      },
      logo:{
        width: 200,
        height:100,
        justifyContent: 'center',
        alignContent: "center"
      },
      columnBox:{
        marginTop: 40,
        marginHorizontal:30,
        flexDirection: "column",
        alignItems: 'center',
      },
      linha:{
        marginTop: 40,
        marginHorizontal:30,
        flexDirection: "row",
        alignItems: 'center',
      }
  });
  