import { useTranslation } from "react-i18next";
import { useCallback, useState, useEffect, useRef } from 'react';

import '../i18n';
import {
  Caret,
  FlagImg,
  LanguageElement,
  LanguageList,
  LanguageSelect,
  WrapperLang,
  LanguageText
} from '../styles';
import { languages, mapperLang } from '../constants';

const LanguageSelectComponent = () => {
	const { i18n } = useTranslation();
  const [isOpenSelect, setIsOpenSelect] = useState(false);
  const [activeLang, setActiveLang] = useState('en');
  const selectRef = useRef(null);

  const onChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setActiveLang(lang);
    setIsOpenSelect(false);
  };

  const onToogleSelect = useCallback(() => {
    setIsOpenSelect(!isOpenSelect);
  }, [isOpenSelect]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpenSelect(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <LanguageSelect ref={selectRef}>
      <WrapperLang onClick={onToogleSelect}>
        <FlagImg lang={activeLang} />
        <LanguageText>{mapperLang[activeLang]}</LanguageText>
        <Caret />
      </WrapperLang>
      <LanguageList open={isOpenSelect}>
        {languages.map((lang) => (
          <LanguageElement key={lang.lang} onClick={() => onChangeLanguage(lang.lang)}>
            <FlagImg lang={lang.lang} />
            <LanguageText>{lang.text}</LanguageText>
          </LanguageElement>
        ))}
      </LanguageList>
    </LanguageSelect>
  );
};

export default LanguageSelectComponent;