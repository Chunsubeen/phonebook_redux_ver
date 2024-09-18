import React from 'react';
import SearchBox from './SearchBox';  // 검색창 컴포넌트
import ContactItem from './ContactItem';  // 개별 연락처 아이템 컴포넌트
import {useSelector} from "react-redux";  // Redux 상태를 읽어옴

const ContactList = () => {
    const contactList = useSelector(state => state.filteredContacts.length > 0 ? state.filteredContacts : state.contactList);  
    // Redux에서 filteredContacts가 있으면 그 리스트를, 없으면 기본 연락처 리스트를 사용

    return (
        <div>
            <SearchBox/>
            {contactList.map((item) => (
                <ContactItem key={item.phoneNumber} item={item}/>  // 각 연락처 아이템을 표시, 고유한 key로 phoneNumber 사용
            ))}
        </div>
    )
}

export default ContactList;
