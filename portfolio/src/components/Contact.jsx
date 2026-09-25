import { TextField, Button } from "@mui/material";
import { motion } from "framer-motion";

const inputSx = {
    "& .MuiOutlinedInput-root": {
        color: "#ccd6f6",
        "& fieldset": { borderColor: "#00d4ff55" },
        "&:hover fieldset": { borderColor: "#00d4ff" },
        "&.Mui-focused fieldset": { borderColor: "#00d4ff" },
    },
    "& .MuiInputLabel-root": { color: "#8892b0" },
    "& .MuiInputLabel-root.Mui-focused": { color: "#00d4ff" },
};

const Contact = () => {
    return (
        <section id="contact" className="py-24 px-6">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center">
                    Contact <span className="text-accent">Me!</span>
                </h2>

                <motion.form
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                    <TextField label="Full Name" fullWidth sx={inputSx} />
                    <TextField label="Email Address" fullWidth sx={inputSx} />
                    <TextField label="Mobile Number" fullWidth sx={inputSx} />
                    <TextField label="Email Subject" fullWidth sx={inputSx} />
                    <div className="md:col-span-2">
                        <TextField
                            label="Your Message"
                            multiline
                            rows={6}
                            fullWidth
                            sx={inputSx}
                        />
                    </div>
                    <div className="md:col-span-2 text-center">
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{
                                bgcolor: "#00d4ff",
                                color: "#0a192f",
                                fontWeight: "bold",
                                px: 6,
                                py: 1.2,
                                "&:hover": { bgcolor: "#00b8e6" },
                            }}
                        >
                            Submit
                        </Button>
                    </div>
                </motion.form>
            </div>
        </section>
    );
};

export default Contact;