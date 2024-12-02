/** NOTE: 코드 포맷팅 규칙
 * [참고] https://prettier.io/docs/en/options
 */
module.exports = {
  // 줄바꿈
  printWidth: 120, // 줄바꿈을 하기 위한 글자 수
  endOfLine: 'auto', // 마지막 줄 개행 처리 여부 (auto | lf | crlf | cr)
  singleAttributePerLine: false, // 속성 개행 처리 여부
  // 공백
  useTabs: false, // 탭 사용 여부
  tabWidth: 2, // 탭 너비
  htmlWhitespaceSensitivity: 'strict', // 공백 민감도 (css | strict | ignore)
  // 특수기호
  singleQuote: true, // 작은 따옴표 사용 여부
  semi: false, // 세미콜론 여부
  bracketSpacing: true, // 객체 중괄호 사이에 공백 출력 여부
  trailingComma: 'none', // 마지막 요소 뒤의 콤마 여부 (all | es5 | none)
  bracketSameLine: true, // 닫는 태그(>)를 한 줄에 작성할지 여부
  arrowParens: 'avoid', // 화살표 함수에서 파라미터가 한 개인 경우 괄호 생략 여부 (always | avoid)
}