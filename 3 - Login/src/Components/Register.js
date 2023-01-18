import { CognitoUserAttribute } from 'amazon-cognito-identity-js';
import { useState } from 'react';
import UserPool from '../UserPool';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [familyName, setFamilyName] = useState('');
  const [givenName, setGivenName] = useState('');
  const [gender, setGender] = useState('');
  const [birthdate, setBirthdate] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const attributeList = [];
    attributeList.push(
      new CognitoUserAttribute({
        Name: 'family_name',
        Value: familyName,
      })
    );
    attributeList.push(
      new CognitoUserAttribute({
        Name: 'given_name',
        Value: givenName
      })
    );
    attributeList.push(
      new CognitoUserAttribute({
        Name: 'gender',
        Value: gender
      })
    );
    attributeList.push(
      new CognitoUserAttribute({
        Name: 'birthdate',
        Value: birthdate
      })
    );
    UserPool.signUp(username, password, attributeList, null, (err, data) => {
      if (err) {
        console.log(err);
        alert("Couldn't sign up");
      } else {
        console.log(data);
        alert('User Added Successfully');
      }
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        UserName:
        <input
          type="text"
          value={username.toLowerCase().trim()}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        FamilyName:
        <input
          type="text"
          value={familyName}
          onChange={(e) => setFamilyName(e.target.value)}
        />
        <br />
        GivenName:
        <input
          type="text"
          value={givenName}
          onChange={(e) => setGivenName(e.target.value)}
        />
        <br />
        Gender:
        <input
          type="text"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />
        <br />
        Birthdate:
        <input
          type="text"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
        />
        <br />
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
