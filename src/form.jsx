import { useState } from "react";

function Form({ index, data }) {
    const [searchValue, setSearchValue] = useState("");
    const [showResult, setShowResult] = useState(false);
    const [isCheck, setIsCheck] = useState(null);

    const handleClick = (e) => {
        e.preventDefault();

        if (searchValue.trim() === data[index]) {
            setIsCheck(true);
        } else {
            setIsCheck(false);
        }
    };

    const handleReset = (e) => {
        e.preventDefault();
        setIsCheck(null);
        setSearchValue("");
        setShowResult(false);
    };

    const handleResult = (e) => {
        e.preventDefault();
        setShowResult(true);
    };

    return (
        <>
            <form className="translate-wrapper">
                <textarea
                    className="translate"
                    type="text"
                    name="translate"
                    id="translate"
                    placeholder="Dịch"
                    value={searchValue}
                    onChange={(e) => {
                        e.target.value = e.target.value.trimStart();
                        setSearchValue(e.target.value);
                    }}
                />
                <button className="check" onClick={handleClick} type="submit">
                    Kiểm tra
                </button>

                <button className="reset" onClick={handleReset}>
                    Làm lại
                </button>

                <button className="show-result" onClick={handleResult}>
                    Kết quả
                </button>
            </form>

            {isCheck === true && <p style={{ color: "green" }}>Đúng</p>}
            {isCheck === false && <p style={{ color: "red" }}>Sai</p>}

            <p className="result">Kết quả: {showResult && data[index]}</p>
        </>
    );
}

export default Form;
