import Sonoplot_Microplotter_Proto from '../assets/research_facility/Sonoplot Microplotter Proto(Inkjet Printer).jpg'
import Probe_Station from '../assets/research_facility/Probe Station.jpg'
import Smart_printer_UV from '../assets/research_facility/Smart Printer UV.jpg'
import ArcOne_memristor_testing_system from '../assets/research_facility/ArcOne memristor testing system.jpg'
import Dispermart from '../assets/research_facility/Dispermart.jpg'
import Fume_Hood from '../assets/research_facility/Fume hood.jpg'
import Gas_sensing_setup from '../assets/research_facility/Gas sensing setup.jpg'
import Keithley_2450 from '../assets/research_facility/Keithley 2450.jpg'
import Muffle_furnace from '../assets/research_facility/Muffle furnace.jpg'
import Neutation_iSTIR_HP550_PRIME from '../assets/research_facility/Neutation iSTIR HP550 PRIME.jpg'
import Photonic_curing from '../assets/research_facility/Photonic curing.jpg'
import Spin_coater from '../assets/research_facility/Spin coater.jpg'
import Thermal_evaporator from '../assets/research_facility/Thermal evaporator.jpg'
import Tubular_furnace from '../assets/research_facility/Tubular furnace.jpg'
import Uv_ozone_cleaner from '../assets/research_facility/Uv ozone cleaner.jpg'



export const lab_device_list = [
    {
        device_name: " Fume Hood",
        device_description: "A fume hood is a ventilated enclosure designed to capture and remove gases, vapors, and fumes from the work area. An exhaust fan, located on the roof of the laboratory building, draws air and airborne contaminants through connected ductwork and expels them into the atmosphere. In our group we have two fume hoods, the typical fume hood features a movable front sash and an interior baffle. The sash, which may move vertically, serves as a protective barrier between the user and the experiment. This design provides enhanced safety for the hood user by minimizing exposure to hazardous substances.",
        device: Fume_Hood
    },
    {
        device_name: "Dispermart",
        device_description: "The dispermart is a versatile, high-efficiency dissolver ideal for dispersion and homogenization in various applications. Featuring a convection-cooled motor, it operates quietly and reliably, making it suitable for both laboratory and industrial use. Key benefits include uniform particle size distribution and thorough mixing, essential for industries like paint, coatings, pharmaceuticals, cosmetics, and food production. The DISPERMAT handles a wide range of viscosities, ensuring precise control and high-quality results in diverse applications",
        device: Dispermart
    },
    {
        device_name: "Neuation iStir HP550 Prime",
        device_description: " This Magnetic Stirrer with a Hotplate offers a uniform stirring motion, perfect for creating homogeneous mixtures and accelerating reactions. With a remarkable speed range of 200 to 2200 RPM, it handles varying viscosity levels with precision. Some of the essential features of this hotplate are that it can go up to 550 ° C with a maximum loading capacity of 20 liters. It can be used with pulse stirring mode and can be programmed according to the user’s convenience.",
        device: Neutation_iSTIR_HP550_PRIME
    },
    {
        device_name: "UV Ozone Cleaner",
        device_description: "UV ozone cleaner description: Ultraviolet (UV) ozone cleaners have proven highly effective in non-acidic, dry, and non-destructive atomic cleaning processes. They efficiently eradicate organic contaminants by utilizing intense UV light at 185 nm and 254 nm. The 185 nm wavelength generates ozone in the presence of oxygen, while the 254 nm wavelength activates organic molecules on surfaces. This dual mechanism swiftly destroys and eliminates organic contaminations. UV ozone cleaners are versatile tools capable of cleaning contaminants from a wide range of substrates, including Si, GaAs, quartz, sapphire, glass, mica, ceramics, metals, and various other materials.",
        device: Uv_ozone_cleaner
    }, 
    {
        device_name: "Photonic Curing System",
        device_description: "Photonic curing is a process that uses intense, short pulses of light to rapidly heat and sinter thin-film materials, such as metal nanoparticles or conductive inks, without damaging the underlying substrates. This method is particularly effective for materials like printed electronics on flexible substrates, where traditional thermal processing could cause warping or damage. Photonic curing achieves extremely high temperatures in microseconds, enabling rapid sintering of the top layer while preserving temperature-sensitive materials below. It is widely used in applications such as crosslinking of polymers, flexible displays, printed circuit boards, and solar cells.",
        device: Photonic_curing
    }, 
    {
        device_name: "Smart Print UV Maskless Lithography System",
        device_description: "Smart Print UV is a maskless lithography equipment, based on a DMD projection technology, compatible with a wide range of resists and substrates. Smart Print UV can produce any 2D shapes at micron resolution without the need for a hard mask. Smart Print UV is perfectly designed for any application fields requiring surface micro patterning such as microfluidics, biotechnologies and microelectronics.",
        device: Smart_printer_UV
    },
    {
        device_name: "Spin Coater",
        device_description: "Spin coater utilizes centrifugal force to produce thin films with a variety of solvents & precursor combinations at very low cost. The holmarc-make spin coater can rotate in the ranges of 100 - 10000 rpm.",
        device: Spin_coater
    },
    {
        device_name: "Thermal Evaporator",
        device_description: "A thermal evaporator is a device used to deposit thin films by heating materials to their evaporation point in a vacuum chamber, allowing the vaporized atoms to condense on a substrate. Key components include a vacuum chamber, a heating source (resistive element or electron beam), a substrate holder, temperature control systems, and deposition monitors. This equipment is essential in various applications such as semiconductor manufacturing, optics, materials science, and microelectronics.",
        device: Thermal_evaporator
    },
    {
        device_name: "Sonoplot Microplotter Proto",
        device_description: "The printer is capable of producing picoliter-sized droplets, forming features on a surface as small as 20 µm in width. When coupled with automatic surface height calibration, it achieves coefficient of variation for deposited feature diameters as low as 10%. The system is compatible with a wide range of fluids, including aqueous solutions and many organic solvent-based mixtures.Besides creating spots, the Microplotter Proto can draw continuous features, such as lines, arcs, and bends.",
        device: Sonoplot_Microplotter_Proto
    },
    {
        device_name: "Tubular Furnace",
        device_description: "A tubular furnace is an electric heating device used to conduct syntheses and purifications of inorganic compounds and occasionally in organic synthesis. One possible design consists of a cylindrical cavity surrounded by heating coils that are embedded in a thermally insulating matrix. ",
        device: Tubular_furnace
    },
    {
        device_name: "Muffle Furnace",
        device_description: "A muffle furnace is a high-temperature oven used in laboratories to perform various heat treatment processes, such as ashing, sintering, and annealing. It features an insulated chamber that isolates the material from direct contact with combustion by-products, ensuring a clean and controlled heating environment. These furnaces are essential for precise thermal applications in chemistry, materials science, and metallurgy.",
        device: Muffle_furnace
    },
    {
        device_name: "Probe Station",
        device_description: "A probe station is an essential laboratory instrument used for testing and characterizing semiconductor devices, microelectronic circuits, and materials at the wafer level. It provides a platform where precise electrical measurements can be performed by making contact with tiny structures on a semiconductor wafer or other micro-scale electronic components. The probe station features highly accurate positioning systems that allow for the manipulation and alignment of probes under a microscope, ensuring consistent and reliable contact with the test points.",
        device: Probe_Station
    }, 
    {
        device_name: "Keithley 2450 SourceMeter Unit",
        device_description: "The Source Measure Unit (SMU) integrated with a probe station enhances its capabilities by allowing precise sourcing of voltage or current and simultaneous measurement of voltage and current. The SMU serves as a versatile tool for various applications, including I-V (current-voltage) characterization, device testing, and curve tracing, offering the functionality of both a power supply and a digital multimeter.",
        device: Keithley_2450
    }, 
    {
        device_name: "Arc ONE Memristor Testing System",
        device_description: "  ArC ONE is a high-performance testing platform designed to test emerging 2-terminal nanoelectronic memory devices like memristors. The instrument is controlled through a simple yet powerful user interface that allows for ArC ONE capabilities to be broadly accessible, from research students to competent test engineers. It can be used with any prober for accessing from single up to 1024 devices directly on a wafer or as a stand-alone portable testing capability to enable advanced in-situ physicochemical characterization techniques. While this instrument provides unrivaled versatility in testing, it does so without compromising on performance; delivering nanosecond pulsing and other bespoke state-of-art capabilities that are essential for characterizing advanced memory devices.",
        device: ArcOne_memristor_testing_system
    },
    {
        device_name: "Gas Sensing Setup",
        device_description: " A typical gas sensing setup consists of a gas chamber, sensor, control electronics, and data acquisition system. The sensor, often based on materials like metal-oxide semiconductors (MOS), conducting polymers, or organic thin-film transistors (OTFTs), is placed in a controlled environment where target gases are introduced. The sensor detects changes in electrical properties (resistance, capacitance, or current) when exposed to the target gas. These changes are recorded by the control electronics and fed into the data acquisition system for analysis. The system is equipped with flow controllers to regulate gas concentration and a temperature controller for optimizing sensor performance. This setup enables precise detection and quantification of gases, making it ideal for applications such as environmental monitoring and VOC detection.",
        device: Gas_sensing_setup
    },
]

export default lab_device_list;