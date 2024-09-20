import device_photo from './device.jpg'

import Sonoplot_Microplotter_Proto from './Sonoplot Microplotter Proto(Inkjet Printer).jpg'
import Spincoater from './Spincoater.jpg'
import Probe_Station from './Probe Station.jpg'
import Keithley_2450_SourceMeter from './Keithley 2450 SourceMeter.jpg'
import UV_ozone_cleaner from './UV ozone cleaner.jpeg'

import Muffle_Furnace from './Muffle Furnace.jpg'
import Tubular_Furnace from './Tubular Furnace.jpeg'
import Smart_printer_UV from './Smart Printer UV.jpg'
import Fume_Hood_1 from './Fume Hood 1.jpg'
import Disperser from './Disperser.jpg'
import Thermal_evaporator from './Thermal Evaporator.jpg'





export const lab_device_list = [
    {
        device_name: "Sonoplot microplotter proto",
        device_description: "The printer is capable of producing picoliter-sized droplets, forming features on a surface as small as 20 µm in width. When coupled with automatic surface height calibration, it achieves coefficient of variation for deposited feature diameters as low as 10%. The system is compatible with a wide range of fluids, including aqueous solutions and many organic solvent-based mixtures.Besides creating spots, the Microplotter Proto can draw continuous features, such as lines, arcs, and bends.",
        device: Sonoplot_Microplotter_Proto
    },
    {
        device_name: "Smart Printer UV Maskless Lithography System",
        device_description: "Smart Print UV is a maskless lithography equipment, based on a DMD projection technology, compatible with a wide range of resists and substrates. Smart Print UV can produce any 2D shapes at micron resolution without the need for a hard mask. Smart Print UV is perfectly designed for any application fields requiring surface micro patterning such as microfluidics, biotechnologies and microelectronics.",
        device: Smart_printer_UV
    },
    {
        device_name: " Fume Hood",
        device_description: "A fume hood is a ventilated enclosure designed to capture and remove gases, vapors, and fumes from the work area. An exhaust fan, located on the roof of the laboratory building, draws air and airborne contaminants through connected ductwork and expels them into the atmosphere. In our group we have two fume hoods, the typical fume hood features a movable front sash and an interior baffle. The sash, which may move vertically, serves as a protective barrier between the user and the experiment. This design provides enhanced safety for the hood user by minimizing exposure to hazardous substances.",
        device: Fume_Hood_1
    },
    {
        device_name: "Thermal Evaporator",
        device_description: "A thermal evaporator is a device used to deposit thin films by heating materials to their evaporation point in a vacuum chamber, allowing the vaporized atoms to condense on a substrate. Key components include a vacuum chamber, a heating source (resistive element or electron beam), a substrate holder, temperature control systems, and deposition monitors. This equipment is essential in various applications such as semiconductor manufacturing, optics, materials science, and microelectronics.",
        device: Thermal_evaporator
    },
    {
        device_name: "Dispermart",
        device_description: "The dispermart is a versatile, high-efficiency dissolver ideal for dispersion and homogenization in various applications. Featuring a convection-cooled motor, it operates quietly and reliably, making it suitable for both laboratory and industrial use. Key benefits include uniform particle size distribution and thorough mixing, essential for industries like paint, coatings, pharmaceuticals, cosmetics, and food production. The DISPERMAT handles a wide range of viscosities, ensuring precise control and high-quality results in diverse applications",
        device: Disperser
    },
    {
        device_name: "Spin Coater",
        device_description: "Spin coater utilizes centrifugal force to produce thin films with a variety of solvents & precursor combinations at very low cost. The holmarc-make spin coater can rotate in the ranges of 100 - 10000 rpm.",
        device: Spincoater
    },
    {
        device_name: "Probe Station",
        device_description: "A probe station is an essential laboratory instrument used for testing and characterizing semiconductor devices, microelectronic circuits, and materials at the wafer level. It provides a platform where precise electrical measurements can be performed by making contact with tiny structures on a semiconductor wafer or other micro-scale electronic components. The probe station features highly accurate positioning systems that allow for the manipulation and alignment of probes under a microscope, ensuring consistent and reliable contact with the test points.",
        device: Probe_Station
    }, 
    {
        device_name: "Keithley 2450 SourceMeter",
        device_description: "The Source Measure Unit (SMU) integrated with a probe station enhances its capabilities by allowing precise sourcing of voltage or current and simultaneous measurement of voltage and current. The SMU serves as a versatile tool for various applications, including I-V (current-voltage) characterization, device testing, and curve tracing, offering the functionality of both a power supply and a digital multimeter.",
        device: Keithley_2450_SourceMeter
    }, 
    {
        device_name: "UV ozone cleaner",
        device_description: "UV - Photonic curing system ; Utilize UV light to rapidly cure or solidify materials like coatings, inks and adhesives through photopolymerisation process. They operate by emitting UV radiation that triggers a chain reaction in the material, transforming it into a solid form quickly.These systems offer advantages like faster curing times, superior quality, energy savings and environment friendliness. ",
        device: UV_ozone_cleaner
    }, 
    {
        device_name: "Photonic curing system",
        device_description: "Printer - The printer is capable of producing picoliter-sized droplets, forming features on a surface as small as 20 µm in width. When coupled with automatic surface height calibration, it achieves coefficient of variation for deposited feature diameters as low as 10%. The system is compatible with a wide range of fluids, including aqueous solutions and many organic solvent-based mixtures.Besides creating spots, the Microplotter Proto can draw continuous features, such as lines, arcs, and bends.",
        device: Muffle_Furnace
    }, 
    {
        device_name: "Tubular Furnace",
        device_description: "A tubular furnace is an electric heating device used to conduct syntheses and purifications of inorganic compounds and occasionally in organic synthesis. One possible design consists of a cylindrical cavity surrounded by heating coils that are embedded in a thermally insulating matrix. ",
        device: Tubular_Furnace
    },
    {
        device_name: "Muffle Furnace",
        device_description: "A muffle furnace is a high-temperature oven used in laboratories to perform various heat treatment processes, such as ashing, sintering, and annealing. It features an insulated chamber that isolates the material from direct contact with combustion by-products, ensuring a clean and controlled heating environment. These furnaces are essential for precise thermal applications in chemistry, materials science, and metallurgy.",
        device: Muffle_Furnace
    }
]

export default lab_device_list;