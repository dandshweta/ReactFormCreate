import { useState } from "react";
import "./assets/css/form.css";

const Form1 = () => {
  const [formData, setFormData] = useState({
    gender: "",
    heightFt: "",
    heightIn: "",
    weight: "",
    familyHistory: "",
    activityLevel: "",
    diabetes: "",
    pregnancy: "",
  });
  const [submittedData, setSubmittedData] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Data:", formData);
    setSubmittedData(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <div className="registration-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <div>
              <h2>Form</h2>
            </div>
            <div className="contentDiv">
              <div className="headingsContent">
                <p>YOUR GENDER</p>
              </div>
              <div className="contentInfo">
                <label>
                  Male
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Female
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    onChange={handleChange}
                  />
                </label>
              </div>
            </div>

            {/* <hr /> */}
            <div className="clear"></div>
            <hr />
            <div>
              <div className="headingsContent">
                <p>Height & Weight</p>
              </div>
              <input
                type="number"
                className="HeightWeight"
                name="heightFt"
                onChange={handleChange}
              />
              ft
              <input
                type="number"
                className="HeightWeight"
                name="heightIn"
                onChange={handleChange}
              />
              in.
              <input
                type="number"
                className="HeightWeight"
                name="weight"
                onChange={handleChange}
              />
              lbs
              {/* <hr /> */}
              <div className="clear"></div>
            </div>
            <hr />
            <div>
              <div className="headingsContent">
                <p>FAMILY HISTORY</p>
              </div>

              <p>Anyone in your family predisposed to diseases?</p>
              <label>
                Parent
                <input
                  type="radio"
                  name="familyHistory"
                  value="Parent"
                  onChange={handleChange}
                />
              </label>
              <label>
                Siblings
                <input
                  type="radio"
                  name="familyHistory"
                  value="Siblings"
                  onChange={handleChange}
                />
              </label>
            </div>
            <hr />
            <div>
              <div className="headingsContent">
                <p>ACTIVITY LEVEL</p>
              </div>
              <p>How active are you on a weekly basis?</p>
              <label>
                Not very active
                <input
                  type="radio"
                  name="activityLevel"
                  value="Not very active"
                  onChange={handleChange}
                />
              </label>
              <label>
                Active
                <input
                  type="radio"
                  name="activityLevel"
                  value="Active"
                  onChange={handleChange}
                />
              </label>
            </div>
            <hr />
            <div>
              <div className="headingsContent">
                <p>DIABETIES</p>
              </div>
              <p>Have you been diagnosed with diabetes before?</p>
              <label>
                Pre-Diabetes
                <input
                  type="radio"
                  name="diabetes"
                  value="Pre-Diabetes"
                  onChange={handleChange}
                />
              </label>
              <label>
                Type-2
                <input
                  type="radio"
                  name="diabetes"
                  value="Type-2"
                  onChange={handleChange}
                />
              </label>
              <label>
                Neither
                <input
                  type="radio"
                  name="diabetes"
                  value="Neither"
                  onChange={handleChange}
                />
              </label>
            </div>
            <hr />
            <div>
              <div className="headingsContent">
                <p>PREGNANCY</p>
              </div>
              <p>Are you currently pregnant?</p>
              <label>
                Pregnant
                <input
                  type="radio"
                  name="pregnancy"
                  value="Pregnant"
                  onChange={handleChange}
                />
              </label>
              <label>
                Not pregnant
                <input
                  type="radio"
                  name="pregnancy"
                  value="Not pregnant"
                  onChange={handleChange}
                />
              </label>
            </div>
          </div>
          <div className="btn">
            <button type="submit">COMPLETE</button>
          </div>
        </form>
      </div>

      <div className="result">
        {submittedData && (
          <div>
            <h3>Form Output:</h3>
            <p>Gender: {submittedData.gender}</p>
            <p>
              Height: {submittedData.heightFt} ft {submittedData.heightIn} in
            </p>
            <p>Weight: {submittedData.weight} lbs</p>
            <p>Family History: {submittedData.familyHistory}</p>
            <p>Activity Level: {submittedData.activityLevel}</p>
            <p>Diabetes: {submittedData.diabetes}</p>
            <p>Pregnancy: {submittedData.pregnancy}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Form1;
