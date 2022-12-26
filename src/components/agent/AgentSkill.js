import React from "react";

const AgentSkill = (props) => {
  const selectedSkill = (a) => {
    props.onSaveSelectedSkill(a);
  };

  return (
    <div className="mt-3 mb-3">
      <div
        onClick={() => selectedSkill(props.role)}
        className={`inline-flex border-solid border-2 mr-1 h-[50px] w-[50px] ${
          props.selected === props.role.displayName ? "border-red-500" : ""
        }`}
      >
        {/* <p>{skill.displayName}</p> */}
        <img
          src={props.role.displayIcon}
          alt={props.role.displayName}
          className="p-1"
        ></img>
      </div>
      {props.skills.map((skill) => {
        return (
          <div
            key={skill.slot}
            onClick={() => selectedSkill(skill)}
            className={`inline-flex border-solid border-2 mx-1 h-[50px] w-[50px] ${
              skill.slot === "Passive" ? "hidden" : ""
            } ${props.selected === skill.displayName ? "border-red-500" : ""}`}
          >
            {/* <p>{skill.displayName}</p> */}
            <img
              src={skill.displayIcon}
              alt={skill.displayName}
              className="p-1"
            ></img>
          </div>
        );
      })}
    </div>
  );
};

export default AgentSkill;
