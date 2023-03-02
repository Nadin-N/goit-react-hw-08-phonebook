import {
  ImageWrap,
  WelcomeImage,
  WelcomeMessage,
  WelcomeSection,
} from './HelloPoster.styled';

function HelloPoster() {
  return (
    <WelcomeSection>
      <WelcomeMessage>Hi! Welcome to the Phonebook application!</WelcomeMessage>
      <ImageWrap>
        <WelcomeImage
          src="https://images.pexels.com/photos/3768166/pexels-photo-3768166.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="handset"
        />
      </ImageWrap>
    </WelcomeSection>
  );
}

export default HelloPoster;
