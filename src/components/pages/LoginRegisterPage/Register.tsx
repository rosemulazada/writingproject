import { motion } from 'framer-motion';

import Input from '@/components/shared/Input/Input';

const Register = () => (
  <>
    <motion.div exit={{ opacity: 0 }}>
      <h2>Login</h2>
      <motion.form exit={{ y: 10 }} className="flex flex-col">
        <Input type="username" label="Username or Email" />
        <Input type="password" label="Password" />

        <Input type="submit" label="Sign me up." />
      </motion.form>
    </motion.div>
  </>
);

export default Register;
