const errorCodes = {
  // 기타 에러
  JSONWEBTOKEN_ERROR: `JSONWEBTOKEN_VALIDATION_ERROR`,
  COMPANY_ERROR: `COMPANY_LIST_ERROR`,
  RESOURCE_ERROR: `RESOURCE_NOT_FOUND_ERROR`,

  // user 에러코드
  USER_EMAIL_ERROR: `USER_EMAIL_INPUT_ERROR`,
  USER_PASSWORD_ERROR: `USER_PASSWORD_INPUT_ERROR`,
  USER_LOGOUT_ERROR: `USER_LOGOUT_ERROR`,
  USER_SIGNUP_ERROR: `USER_SIGNUP_ERROR`,
  USER_IDENTIFY_ERROR: `USER_IDENTIFY_ERROR`,
  USER_EDIT_ERROR: `USER_EDIT_ERROR`,
  USER_DELETE_ERROR: `USER_DELETE_ERROR`,
  USER_SIGNIN_VALIDATION_ERROR: `USER_SIGNIN_VALIDATION_ERROR`,
  USER_SIGNUP_VALIDATION_ERROR: `USER_SIGNUP_VALIDATION_ERROR`,
  USER_EDIT_VALIDATION_ERROR: `USER_EDIT_VALIDATION_ERROR`,

  // board 에러코드
  BOARD_CREATE_ERROR: `BOARD_CREATE_ERROR`,
  BOARD_EDIT_ERROR: `BOARD_EDIT_ERROR`,
  BOARD_SEARCH_ERROR: `BOARD_SEARCH_ERROR`,
  BOARD_FIND_ERROR: `BOARD_FIND_ERROR`,
  BOARD_DELETE_ERROR: `BOARD_DELETE_ERROR`,
  BOARD_CREATE_VALIDATION_ERROR: `BOARD_CREATE_VALIDATION_ERROR`,
  BOARD_EDIT_VALIDATION_ERROR: `BOARD_EDIT_VALIDATION_ERROR`,

  // image 에러코드
  IMAGE_SIZE_ERROR: `IMAGE_SIZE_INPUT_ERROR`,
  IMAGE_EXTENSION_ERROR: `IMAGE_EXTENSION_ERROR`,
  IMAGE_RESIZING_ERROR: `IMAGE_RESIZING_ERROR`,

  // main 에러코드
  CATEGORY_GRAPH_ERROR: `CATEGORY_GRAPH_DATA_ERROR`,
  MONTHLY_GRAPH_ERROR: `MONTHLY_GRAPH_DATA_ERROR`,
  AREA_GRAPH_ERROR: `AREA_GRAPH_DATA_ERROR`,
  ALL_LISTS_GRAPH_ERROR: `ALL_LISTS_GRAPH_ERROR`,
  ITEM_LIST_ERROR: `ITEM_LIST_ERROR`,
  REWARD_RANK_ERROR: `REWARD_RANK_ERROR`,
  NEW_ITEMS_ERROR: `NEW_ITEMS_ERROR`,

  // item 에러코드
  ITEM_CREATE_ERROR: `ITEM_CREATE_ERROR`,
  ITEM_EDIT_ERROR: `ITEM_EDIT_ERROR`,
  ITEM_SEARCH_ERROR: `ITEM_SEARCH_ERROR`,
  ITEM_FIND_ERROR: `ITEM_FIND_ERROR`,
  ITEM_DELETE_ERROR: `ITEM_DELETE_ERROR`,
  ITEM_PICKUP_ERROR: `ITEM_PICKUP_ERROR`,
  ITEM_CREATE_VALIDATION_ERROR: `ITEM_CREATE_VALIDATION_ERROR`,
  ITEM_EDIT_VALIDATION_ERROR: `ITEM_EDIT_VALIDATION_ERROR`,
  ITEM_PICKUP_VALIDATION_ERROR: `ITEM_PICKUP_VALIDATION_ERROR`,
};

const errorMessages = {
  // 기타 에러
  JSONWEBTOKEN_ERROR: "JWT 토큰이 만료되었거나 없습니다.",
  COMPANY_ERROR: "회사 목록을 불러오지 못했습니다.",
  RESOURCE_ERROR: "잘못된 경로입니다.",

  // user 에러코드
  USER_EMAIL_ERROR: "이메일이 존재하지 않습니다.",
  userEmailFoundError: "존재하는 이메일입니다.",
  USER_PASSWORD_ERROR: "비밀번호가 다릅니다.",
  USER_LOGOUT_ERROR: "로그아웃에 실패했습니다.",
  USER_SIGNUP_ERROR: "회원가입에 실패했습니다.",
  USER_IDENTIFY_ERROR: "회원(개인)정보 조회에 실패했습니다.",
  USER_EDIT_ERROR: "회원(개인)정보 수정에 실패했습니다.",
  USER_DELETE_ERROR: "회원(개인)정보 삭제에 실패했습니다.",
  USER_SIGNIN_VALIDATION_ERROR: "로그인에 필요한 입력이 잘못되었습니다.",
  USER_SIGNUP_VALIDATION_ERROR: "회원가입에 필요한 입력이 잘못되었습니다.",
  USER_EDIT_VALIDATION_ERROR:
    "회원(개인)정보 수정에 필요한 입력이 잘못되었습니다.",

  // board 에러코드
  BOARD_CREATE_ERROR: "게시글 등록에 실패했습니다.",
  BOARD_EDIT_ERROR: "게시글 수정에 실패했습니다.",
  BOARD_SEARCH_ERROR: "게시글 검색에 실패했습니다.",
  BOARD_FIND_ERROR: "게시글 상세 조회에 실패했습니다.",
  BOARD_DELETE_ERROR: "게시글 삭제에 실패했습니다.",
  BOARD_CREATE_VALIDATION_ERROR: "게시글 생성에 필요한 입력이 잘못되었습니다.",
  BOARD_EDIT_VALIDATION_ERROR: "게시글 수정에 필요한 입력이 잘못되었습니다.",

  // image 에러코드
  IMAGE_SIZE_ERROR: "사이즈 입력이 잘못되었습니다.",
  IMAGE_EXTENSION_ERROR: "이미지 확장자가 잘못되었습니다.",
  IMAGE_RESIZING_ERROR: "이미지 리사이징을 실패했습니다.",

  // main 에러코드
  CATEGORY_GRAPH_ERROR: "카테고리별 데이터를 불러오는데 실패했습니다.",
  MONTHLY_GRAPH_ERROR: `월별 데이터를 불러오는데 실패했습니다.`,
  AREA_GRAPH_ERROR: `자치구별 데이터를 불러오는데 실패했습니다.`,
  ALL_LISTS_GRAPH_ERROR: `총 분실량 데이터를 불러오는데 실패했습니다.`,
  ITEM_LIST_ERROR: "분실물 데이터를 불러오는데 실패했습니다.",
  REWARD_RANK_ERROR: "reward를 기준 랭킹 데이터를 불러오는데 실패했습니다.",
  NEW_ITEMS_ERROR: "최근 분실물 데이터를 불러오는데 실패했습니다.",

  // item 에러코드
  ITEM_CREATE_ERROR: "분실물 등록에 실패했습니다.",
  ITEM_EDIT_ERROR: "분실물 수정에 실패했습니다.",
  ITEM_SEARCH_ERROR: "분실물 검색에 실패했습니다.",
  ITEM_FIND_ERROR: "분실물 상세 조회에 실패했습니다.",
  ITEM_DELETE_ERROR: "분실물 삭제에 실패했습니다.",
  ITEM_PICKUP_ERROR: "분실물 회수에 실패했습니다.",
  ITEM_CREATE_VALIDATION_ERROR: "분실물 등록에 필요한 입력이 잘못되었습니다.",
  ITEM_EDIT_VALIDATION_ERROR: "분실물 수정에 필요한 입력이 잘못되었습니다.",
  ITEM_PICKUP_VALIDATION_ERROR: "분실물 회수에 필요한 입력이 잘못되었습니다.",
};

module.exports = {
  errorCodes,
  errorMessages,
};
