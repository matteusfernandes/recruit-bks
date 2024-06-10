'use client';

require('dotenv').config();

import { useForm } from 'react-hook-form';
import { Input } from '@/components/Input';
import _ from 'lodash';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';

import {
  Container,
  HeaderContainer,
  Title,
  Section,
  FormContainer,
  FormSection,
  FormLine,
  ButtonContainer,
  SubmitButton,
  FooterContainer,
  Img
} from './style';

const schema = yup.object({
  fullName: yup.string().required(),
  age: yup.number().required(),
  nationality: yup.string().required(),
  rg: yup.number().required(),
  rgBody: yup.string().required(),
  cpf: yup.number().required(),
  job: yup.string().required(),
  fatherName: yup.string().required(),
  motherName: yup.string().required(),
  homeAdress: yup.string().required(),
  homeNumber: yup.number().required(),
  homeNeighborhood: yup.string().required(),
  homeComplement: yup.string(),
  homeCity: yup.string().required(),
  homeState: yup.string().required(),
  homeCep: yup.string().required(),
  jobAdress: yup.string().required(),
  jobNumber: yup.number().required(),
  jobNeighborhood: yup.string().required(),
  jobComplement: yup.string(),
  jobCity: yup.string().required(),
  jobState: yup.string().required(),
  jobCep: yup.string().required(),
  instagram: yup.string().required(),
  facebook: yup.string(),
  twitter: yup.string(),
  linkedin: yup.string()
});

export default function Home() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  const handleDataSubmit = async (formData) => {
    // try {
    //   await emailjs.send(
    //     process.env.NEXT_PUBLIC_SERVICE_ID,
    //     process.env.NEXT_PUBLIC_TEMPLATE_ID,
    //     formData,
    //     process.env.NEXT_PUBLIC_USER_ID
    //   );
    //   toast.success('Enviado com Sucesso');
    // } catch (error) {
    //   toast.error('Falha ao Enviar');
    // }
    console.log('clicou');
    reset();
  };

  return (
    <Container>
      <HeaderContainer>
        <Img src="/images/logoCinza.png" width={800} height={300}></Img>
      </HeaderContainer>
      <Section>
        <h2>Sobre Nós</h2>
        <p>
          O Black Skulls é uma equipe de Airsoft MILSIM que foi fundada em 2019,
          inicialmente como um squad de amigos que jogavam e treinavam juntos. A
          equipe possui caráter desportivo, é instituída por integrantes
          devidamente filiados, atendendo aos requisitos estabelecidos por seus
          fundadores e regimento interno, e tem por objetivo promover o Airsoft
          MILSIM no Estado da Bahia.
        </p>
        <p>
          {' '}
          Visamos um ambiente de amizade, cooperação e irmandade, baseando-se
          sempre no princípio fundamental do esporte: a HONRA. Realizamos
          diversos treinamentos, sempre com foco na participação em eventos
          sérios realizados dentro da comunidade de Airsoft da Bahia e Brasil.
        </p>
        <p>
          A equipe é composta por jogadores de diferentes níveis de experiência,
          desde iniciantes até veteranos, e todos são bem-vindos. O Black Skulls
          é uma equipe que valoriza a amizade, o companheirismo e a diversão, e
          que está sempre disposta a ajudar seus membros a melhorarem suas
          habilidades no Airsoft.
        </p>
      </Section>
      <Section>
        <FormContainer onSubmit={handleSubmit(handleDataSubmit)}>
          <Title>Formulário de Recrutamento</Title>
          <FormSection>
            <h3>Dados Pessoais</h3>
            <Input
              label="Nome Completo"
              error={errors?.fullName?.message}
              {...register('fullName')}
            />
            <FormLine>
              <Input
                label="Idade"
                error={errors?.age?.message}
                {...register('age')}
              />
              <Input
                label="Naturalidade"
                error={errors?.nationality?.message}
                {...register('nationality')}
              />
            </FormLine>
            <FormLine hasMoreThanTwoChildren>
              <Input
                label="RG"
                error={errors?.rg?.message}
                {...register('rg')}
              />
              <Input
                label="Órgão Emissor"
                error={errors?.rgBody?.message}
                {...register('rgBody')}
              />
              <Input
                label="CPF"
                error={errors?.cpf?.message}
                {...register('cpf')}
              />
            </FormLine>
            <FormLine>
              <Input
                label="Profissão"
                error={errors?.job?.message}
                {...register('job')}
              />
              <Input
                label="Local de Trabalho"
                error={errors?.fullName?.message}
                {...register('fullName')}
              />
            </FormLine>
            <Input
              label="Nome Completo do Pai"
              error={errors?.fatherName?.message}
              {...register('fatherName')}
            />
            <Input
              label="Nome Completo da Mãe"
              error={errors?.motherName?.message}
              {...register('motherName')}
            />
          </FormSection>
          <FormSection>
            <h3>Endereço Residencial</h3>
            <FormLine hasMoreThanTwoChildren>
              <Input
                label="Rua"
                error={errors?.homeAdress?.message}
                {...register('homeAdress')}
              />
              <Input
                label="Número"
                error={errors?.homeNumber?.message}
                {...register('homeNumber')}
              />
              <Input
                label="Bairro"
                error={errors?.homeNeighborhood?.message}
                {...register('homeNeighborhood')}
              />
            </FormLine>
            <Input
              label="Complemento"
              error={errors?.homeComplement?.message}
              {...register('homeComplement')}
            />
            <FormLine hasMoreThanTwoChildren>
              <Input
                label="Cidade"
                error={errors?.homeCity?.message}
                {...register('homeCity')}
              />
              <Input
                label="Estado"
                error={errors?.homeState?.message}
                {...register('homeState')}
              />
              <Input
                label="Cep"
                error={errors?.homeCep?.message}
                {...register('homeCep')}
              />
            </FormLine>
          </FormSection>
          <FormSection>
            <h3>Endereço do Local de Trabalho</h3>
            <FormLine hasMoreThanTwoChildren>
              <Input
                label="Rua"
                error={errors?.jobAdress?.message}
                {...register('jobAdress')}
              />
              <Input
                label="Número"
                error={errors?.jobNumber?.message}
                {...register('jobNumber')}
              />
              <Input
                label="Bairro"
                error={errors?.jobNeighborhood?.message}
                {...register('jobNeighborhood')}
              />
            </FormLine>
            <Input
              label="Complemento"
              error={errors?.jobComplement?.message}
              {...register('jobComplement')}
            />
            <FormLine hasMoreThanTwoChildren>
              <Input
                label="Cidade"
                error={errors?.jobCity?.message}
                {...register('jobCity')}
              />
              <Input
                label="Estado"
                error={errors?.jobState?.message}
                {...register('jobState')}
              />
              <Input
                label="Cep"
                error={errors?.jobCep?.message}
                {...register('jobCep')}
              />
            </FormLine>
          </FormSection>
          <FormSection>
            <h3>Redes Sociais</h3>
            <FormLine hasMoreThanTwoChildren hasMoreThanThreeChildren>
              <Input
                label="Instagram"
                error={errors?.instagram?.message}
                {...register('instagram')}
              />
              <Input
                label="Facebook"
                error={errors?.facebook?.message}
                {...register('facebook')}
              />
              <Input
                label="X (Twitter)"
                error={errors?.twitter?.message}
                {...register('twitter')}
              />

              <Input
                label="LinkedIn"
                error={errors?.linkedin?.message}
                {...register('linkedin')}
              />
            </FormLine>
          </FormSection>
          <span>
            Ao enviar este formulário, você confirma que todas as informações
            fornecidas são verdadeiras e você assume total responsabilidade pela
            veracidade dos dados.
          </span>
          <ButtonContainer>
            <SubmitButton type="submit">Enviar</SubmitButton>
          </ButtonContainer>
        </FormContainer>
      </Section>
      <FooterContainer>
        <p>
          &copy; 2024 Black Skulls Tactical Team. Todos os direitos reservados.
        </p>
        <p>
          Siga-nos nas redes sociais:{' '}
          <a href="https://www.instagram.com/bkstactical">Instagram</a> |{' '}
          <a href="https://www.bkstactical.com">Site</a>
        </p>
      </FooterContainer>
    </Container>
  );
}
