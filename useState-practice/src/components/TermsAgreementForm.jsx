import { useState } from "react";

const TermsAgreementForm = () => {
  const [agreed, setAgreed] = useState(false);

  const handleChange = (e) => {
    setAgreed(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("送信しました");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>利用規約に同意したら有効になる</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label>
            <input
              type="checkbox"
              checked={agreed}
              onChange={handleChange}
            />
            利用規約に同意する
          </label>
        </div>
        <button type="submit" disabled={!agreed}>
          送信
        </button>
      </form>
    </div>
  );
};

export default TermsAgreementForm;