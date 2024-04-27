const AddEmpl = () => {
  return (
    <>
      <h2>Add Employee</h2>
      <form>
        <input type='file' name='image' id='imgInp' />
        <input placeholder='Name' type='text' name='name' />
        <input placeholder='Role' type='text' name='role' />
        <input placeholder='contact' type='number' name='contact' />
        <button type='submit'>Submit</button>
      </form>
    </>
  );
};

export default AddEmpl;
