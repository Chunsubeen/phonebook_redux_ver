let initialState = {
    contactList: [],  // 전체 연락처 리스트
    filteredContacts: []  // 검색된 연락처 리스트
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_CONTACT":  // 연락처를 추가하는 액션
            return {
                ...state,
                contactList: [...state.contactList,  // 기존 리스트에 새 연락처 추가
                {
                    name: action.payload.name,
                    phoneNumber: action.payload.phoneNumber,
                }],
            };
        case "SEARCH_CONTACT":  // 검색 액션
            const searchTerm = action.payload.toLowerCase();  // 검색어를 소문자로 변환
            const filteredContacts = state.contactList.filter(contact => 
                contact.name.toLowerCase().includes(searchTerm));  // 이름에 검색어가 포함된 연락처 필터링
            return {
                ...state,
                filteredContacts: filteredContacts  // 필터링된 리스트 업데이트
            };
        default:
            return { ...state };  // 기본 상태 반환
    }
}

export default reducer;
