import React from "react";
import Button from "../../components/Button/Index";
import Separator from "../../components/Separator/Index";
import banner from "../../../assets/images/banner/image.png";
import { useTheme } from "styled-components";
import emailIcon from "./../../../assets/icons/email.png";
import { useNavigation } from '@react-navigation/native';
import { Banner, Container, Content, EmailIcon, ImpactPhrase } from "./styles";

const Access: React.FC = () => {
    const { colors } = useTheme();

    const navigation = useNavigation();

    const handleButtonLogin = () => navigation.navigate("login");


  return (
    <Container>
      <Banner resizeMode="contain" source={banner} />
      <Content>
        <ImpactPhrase type="bold">
          {`Aprenda a investir e\nconquiste sua liberdade\nfinanceira`}
        </ImpactPhrase>
        <Separator height={30} />
        <Button title="Assine agora" textType="bold" />
        <Separator height={20} />
        <Button
          outlined
          title="Entrar com email"
          textType="semiBold"
          icon={
            <EmailIcon
              style={{
                tintColor: colors.background.onMain,
              }}
              source={emailIcon}
            />
          }
          onPress={handleButtonLogin}
        />
        <Separator height={45} />
      </Content>
    </Container>
  );
};

export default Access;