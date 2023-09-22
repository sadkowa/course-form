import styled from "styled-components";

const StyledProgressBar = styled.progress`
    border-radius: 20px;
    background-color: white;
    width: 600px;

    &[value]::-webkit-progress-bar {

  background-color: #eee;
  border-radius: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;
  /* padding: 20px 0; */
}
    box-shadow:  5px 5px 5px #aeaeae,
             -5px -5px 5px #eeeeee;

    &[value]::-webkit-progress-value {
        background-color: blue;
  border-radius: 20px;

    }

`

export default StyledProgressBar