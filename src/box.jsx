import { useEffect, useState } from "react";
import { data } from "./data";
import Form from "./form";

function Box() {
    const [selectedDe, setSelectDe] = useState(data[0]);
    const [active, setActive] = useState(1);
    const [resetTrigger, setResetTrigger] = useState(false);

    const handleActive = (index) => {
        setActive(index + 1);
        setSelectDe(data[index]);
    };

    // Reset form khi thay đổi đề
    useEffect(() => {
        setResetTrigger((prev) => !prev); // Thay đổi giá trị để reset form
    }, [selectedDe]);

    const resetForm = () => {
        // Hàm này sẽ được truyền vào Form component để reset
        setResetTrigger((prev) => !prev);
    };

    return (
        <>
            <p style={{ marginBottom: 20 }}>
                Chú ý: Phần kết quả lấy từ phần dịch của thầy cho, không lấy từ
                gg dịch nên là phải dịch đúng từng chữ mới hiển thị kết quả đúng
            </p>
            <div className="subject-list">
                {data.map((index) => (
                    <button
                        key={index}
                        className={
                            active === index + 1 ? "subject active" : "subject"
                        }
                        onClick={() => handleActive(index)}
                    >
                        Đề: {index + 1}
                    </button>
                ))}
            </div>

            {selectedDe.questionGroup.map((e, index) => (
                <div key={index} className="item">
                    <div className="wrapper">
                        <p className="question">
                            {index + 1}. {e}
                        </p>
                        <Form
                            index={index}
                            data={selectedDe.translateGroup}
                            resetForm={resetForm}
                            key={resetTrigger}
                        />
                    </div>
                </div>
            ))}
        </>
    );
}

export default Box;
