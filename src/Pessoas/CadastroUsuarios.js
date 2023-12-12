import { Formik } from 'formik';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import { Button, TextInput, Text} from 'react-native-paper';
import * as yup from 'yup';

export default function CadastroUsuarios({ navigation, route }) {

  const acao = route.params.acao
  const pessoaAntiga = route.params.pessoaAntiga
  const validationSchema = yup.object().shape({
    nome: yup.string().min(5, 'Nome curto').max(50, 'Nome grande').required('Campo obrigatório'),
    cpf: yup.string().min(14, 'cpf inválido').max(14, 'cpf inválido').required('Campo obrigatório'),
    email: yup.string().email('email inválido').required('Campo obrigatório'),
    senha: yup.string().min(6, 'Senha curta').max(12, 'Senha grande').required('Campo obrigatório')
  })

  function salvar(pessoa) {

    if(pessoaAntiga) {
      acao(pessoa, pessoaAntiga)
    } else {
      acao(pessoa)
    }
    
    navigation.goBack()
  }


  return (
    <View>

      <Formik
        initialValues={{
          nome: pessoaAntiga ? pessoaAntiga.nome : '',
          cpf: pessoaAntiga ? pessoaAntiga.cpf : '',
          email: pessoaAntiga ? pessoaAntiga.email : '',
          senha: pessoaAntiga ? pessoaAntiga.senha : '',
        }}
        validationSchema={validationSchema}
        onSubmit={values => salvar(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View>


            <TextInput
              style={styles.input}
              mode='outlined'
              label='Nome'
              value={values.nome}
              onChangeText={handleChange('nome')}
              onBlur={handleBlur('nome')}
              error={errors.nome && touched.nome}

            />

            {(errors.nome && touched.nome) && <Text style={{ textAlign: "center"}}>{errors.nome}</Text>} 

            <TextInput
              style={styles.input}
              mode='outlined'
              label='CPF'
              value={values.cpf}
              onChangeText={handleChange('cpf')}
              onBlur={handleBlur('cpf')}
              error={errors.cpf && touched.cpf}
              keyboardType={'numeric'}
              render={props =>
                <TextInputMask
                {...props}
                type={'cpf'}
                />

              }
            />
              {(errors.cpf && touched.cpf) && <Text style={{ textAlign: "center"}}>{errors.cpf}</Text>}
              
              <TextInput
                style={styles.input}
                mode='outlined'
                label='Email'
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                error={errors.email && touched.email}
              />
              {(errors.email && touched.email) && <Text style={{ textAlign: "center"}}>{errors.email}</Text>}

            <TextInput
              style={styles.input}
              mode='outlined'
              label='Senha'
              value={values.senha}
              onChangeText={handleChange('senha')}
              onBlur={handleBlur('senha')}
              error={errors.senha && touched.senha}
              render={props =>
                <TextInputMask
                {...props}
                type={'custom'}
                options={{
                  mask: '********************************', // Máscara para esconder a senha
                }}
                secureTextEntry
              />
              }
            />
              {(errors.senha && touched.senha) && <Text style={{ textAlign: "center"}}>{errors.senha}</Text>}



            <Button mode='contained' onPress={handleSubmit} >Cadastrar</Button>
          </View>
        )}
      </Formik>





    </View>
  )
}

const styles = StyleSheet.create({})